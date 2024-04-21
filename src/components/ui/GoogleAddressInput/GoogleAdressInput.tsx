import { FC } from 'react';
import Autocomplete from 'react-google-autocomplete';

interface GoogleAdressInputProps {
  onChange: (place?: string | undefined) => void;
  defaultValue: string | undefined;
}

const GoogleAdressInput: FC<GoogleAdressInputProps> = ({ onChange, defaultValue }) => {
  return (
    <div>
      <Autocomplete
        defaultValue={defaultValue || ''}
        apiKey={import.meta.env.VITE_REACT_API_URL}
        onPlaceSelected={(place) => onChange(place?.formatted_address)}
        onChange={() => onChange()}
        options={{
          types: ['geocode', 'establishment'],
        }}
        className="py-2 px-3 border border-gray w-full"
      />
    </div>
  );
};

export default GoogleAdressInput;
