import './Header.css'
import { MenuItem, createTheme, TextField, ThemeProvider } from '@material-ui/core'
import categories from '../../data/category'

export default function Header({ setCategory, category, word, setWord, LightMode }) {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff'
            },
            type: 'dark',
        },
    });

    const lightTheme = createTheme({
        palette: {
            primary: {
                main: '#000'
            },
            type: 'light',
        },
    });

    const handleChange = (e) => {
        setCategory(e.target.value);
        setWord("");
    }

    return (
        <div className="header">
            <span className="title">{word ? word : 'Word Dic'}</span>
            <div className="input">
                <ThemeProvider theme={LightMode ? lightTheme : darkTheme}>
                    <TextField
                        className='search'
                        label="Search a word"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e)}
                        className="select"
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.label} value={option.label}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}
