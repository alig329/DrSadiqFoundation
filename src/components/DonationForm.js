import React, { useState } from 'react';
import axios from 'axios';
import './DonationForm.css';

const DonationForm = () => {
    const [amount, setAmount] = useState('');
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });
    const [collected, setCollected] = useState(35);  // Assuming this comes from your API
    
    const presetAmounts = [10, 25, 50, 100, 200, 250];

    const handleAmountClick = (value) => {
        setAmount(value);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/donations', { ...formData, amount });
            console.log('Donation successful:', response.data);
        } catch (error) {
            console.error('Error processing donation:', error);
        }
    };

    return (
        <div className='donation-section'>
            <form className='donation-form' onSubmit={handleSubmit}>
            <h1>Donate Now</h1>
            <div className="donation-progress">
                <span style={{ color: 'green' }}>{collected}%</span>
                <span style={{ color: 'white' }}>{setCollected} {100 - collected}%</span>
                <progress value={collected} max="100"></progress>
            </div>

            <div className="preset-amounts">
                {presetAmounts.map((value, index) => (
                    <button type="button" key={index} onClick={() => handleAmountClick(value)}>
                        ${value}
                    </button>
                ))}
            </div>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter custom amount"
            />

            <h1>Personal Information</h1>
            <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
            <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

            <button type="submit">Donate Now</button>
        </form>
        </div>
    );
};

export default DonationForm;
