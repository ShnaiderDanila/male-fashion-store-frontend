import { FC } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { TProduct } from '../../../types/entities/product-entity';

interface ProductsSearchInputProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  sortedAndSearchedProducts: TProduct[];
}

const ProductsSearchInput: FC<ProductsSearchInputProps> = ({
  searchQuery,
  setSearchQuery,
  sortedAndSearchedProducts,
}) => {
  const TextFieldSx = {
    position: 'relative',
    '& .MuiOutlinedInput-root': {
      color: '#111111',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#b7b7b7',
        borderWidth: '1px',
      },
      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#111111',
          borderWidth: '1px',
        },
      },
    },
    '& .MuiInputLabel-outlined': {
      color: '#b7b7b7',
      '&.Mui-focused': {
        color: '#111111',
        fontWeight: 'bold',
      },
    },
  };

  return (
    <div className="max-w-[95%] w-full mx-auto lg:max-w-full">
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={sortedAndSearchedProducts.map((product) => product.name)}
        sx={{
          position: 'relative',
        }}
        value={searchQuery}
        onChange={(_e, newValue: string) => setSearchQuery(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            type="text"
            sx={TextFieldSx}
            label="Поиск"
            InputProps={{
              ...params.InputProps,
            }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        )}
      />
    </div>
  );
};

export default ProductsSearchInput;
