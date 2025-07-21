import { useState, useEffect } from 'react';
import Flags from 'country-flag-icons/react/3x2';

const CountryFlag = () => {
    const [countryCode, setCountryCode] = useState<string>('');

    useEffect(() => {
        // Using api.ipdata.co - they have a free tier
        fetch('https://api.ipdata.co?api-key=test') // Replace with your API key
            .then(response => response.json())
            .then(data => {
                setCountryCode(data.country_code);
            })
            .catch(error => {
                console.error('Error fetching country:', error);
                setCountryCode('KE');
            });
    }, []);

    const FlagComponent = countryCode && (Flags as any)[countryCode];

    return (
        <div className="w-8 h-6">
            {FlagComponent ? <FlagComponent title={countryCode} /> : null}
        </div>
    );
};

export default CountryFlag;