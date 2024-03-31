import { FC } from 'react';
import { GrSearch } from 'react-icons/gr';
import { IoMdCloseCircle } from 'react-icons/io';
// import Autocomplete from '@mui/material/Autocomplete';
// import { InputAdornment, TextField } from '@mui/material';

interface ProductsSearchInputProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const ProductsSearchInput: FC<ProductsSearchInputProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
      <div className="w-10/12 m-auto relative lg:w-full">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Искать в каталоге"
          className="w-full text-primary-light px-10 border border-gray h-11 outline-gray rounded-md shadow-sm"
        />
        <span className="absolute top-3.5 left-3">
          <GrSearch className="text-primary-light" />
        </span>
        <button className="absolute top-0 right-0 p-3.5" onClick={() => setSearchQuery('')}>
          <IoMdCloseCircle className="text-primary-light" />
        </button>
      </div>
      {/* <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={['123', '312'].map((option) => option)}
        sx={{
          position: 'relative',
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            type="text"
            sx={{
              position: 'relative',
              '& .MuiOutlinedInput-root': {
                color: '#000',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#2e2e2e',
                  borderWidth: '2px',
                },
                '&.Mui-focused': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'secondary.main',
                    borderWidth: '3px',
                  },
                },
                '&:hover:not(.Mui-focused)': {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ccc',
                  },
                },
              },
              '& .MuiInputLabel-outlined': {
                color: 'gray',
                fontWeight: 'bold',
                '&.Mui-focused': {
                  color: 'gray',
                  fontWeight: 'bold',
                },
              },
            }}
            label="Поиск"
            InputProps={{
              ...params.InputProps,
            }}
          />
        )}
      /> */}
    </>
  );
};

export default ProductsSearchInput;
