import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useColorScheme } from '@mui/material/styles';
function ModeSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {' '}
            <LightModeIcon /> <span>Light</span>
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <DarkModeOutlinedIcon /> <span>Dark</span>
          </div>
        </MenuItem>
        <MenuItem value="system">
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <SettingsBrightnessOutlinedIcon /> <span>System</span>
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {
  return (
    <>
      <Container
        disableGutters
        maxWidth="false"
        sx={{ height: '100vh', backgroundColor: 'primary.main' }}
      >
        <Box
          sx={{
            backgroundColor: 'primary.light',
            height: (theme) => theme.trello.height.appBar,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ModeSelect />
        </Box>
        <Box
          sx={{
            backgroundColor: 'primary.dark',
            height: (theme) => theme.trello.height.boardBar,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Board Bar
        </Box>
        <Box
          sx={{
            backgroundColor: 'primary.main',
            height: (theme) =>
              `calc(100vh - ${theme.trello.height.appBar} - ${theme.trello.height.boardBar})`,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Content
        </Box>
      </Container>
    </>
  );
}

export default App;
