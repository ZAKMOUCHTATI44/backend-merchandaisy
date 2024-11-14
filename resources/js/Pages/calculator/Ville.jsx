import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {villes} from "./Villes"
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '@/features/calculatorSlice'
import InputError from '@/Components/InputError';
import { usePage } from '@inertiajs/inertia-react';

const Ville = () => {
    const dispatch=useDispatch();
    const errors=useSelector(state=>state.calculatorSlice.errors)
    const data=useSelector(state=>state.calculatorSlice.data)
    const { sectours }=usePage().props
  return (
    <>
      <Autocomplete
            disablePortal
            id="villes"
            options={sectours}
            onChange={(event, value) => dispatch(setData({"ville":value.id}))}
            renderInput={(params) => <TextField {...params} label="Choisir le secteur" />}
        />
        <InputError message={errors?.ville}  className="mt-2 text-start" />
    </>
  )
}
export default Ville

