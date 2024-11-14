import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '@/features/calculatorSlice'
import moment from "moment"
import InputError from '@/Components/InputError';
export default function MaterialUIPickers() {
    const dispatch=useDispatch();
    const errors=useSelector(state=>state.calculatorSlice.errors)

  const [value, setValue] = React.useState(dayjs(new Date()));
  const data=useSelector(state=>state.calculatorSlice.data)


  const handleChange = (newValue) => {
    setValue(newValue);
    dispatch(setData({"brithday": moment(newValue.$d).format("Y-M-D")}))
  };

  return (
    <>
    <div className='w-1/2'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DesktopDatePicker
              label="MM/DD/YYYY"
              inputFormat="MM/DD/YYYY"
              value={data?.brithday}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
    </div>
    <InputError message={errors?.brithday}  className="mt-2 text-start" />
    </>

  );
}
