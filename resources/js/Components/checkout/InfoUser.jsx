import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Textarea from '@mui/joy/Textarea';
import { useDispatch, useSelector } from 'react-redux';
import { addInfo } from '@/features/orderSlice';
import InputError from '../InputError';
import { usePage } from '@inertiajs/inertia-react';
import Autocomplete from '@mui/material/Autocomplete';

const InfoUser = () => {
    let { sectours } = usePage().props

    let [createAccount,setCreateAccount] = useState(false);

    const orderSlice=useSelector(state=>state.orderSlice)

    console.log(orderSlice)

    useEffect(()=>{
        if(createAccount) {
            localStorage.setItem('info',JSON.stringify(orderSlice.info) )
        }
    },[createAccount])

    const dispatch=useDispatch()
    const handleChange=(e)=>{
        dispatch(addInfo({[e.target.name]:e.target.value}))
    }


  return (
    <div className='px-5'>
        <h3 className='font-semibold text-2xl'>
            Facturation & Expédition
        </h3>
        <div className="mt-12">
            <div className="grid grid-rows-1 gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="Nom">Nom </InputLabel>
                            <OutlinedInput
                                id="Nom"
                                type='text'
                                label="Nom"
                                name="lastname"
                                defaultValue={orderSlice.info?.lastname}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <InputError message={orderSlice.errors?.lastname} className="mt-2" ></InputError>
                    </div>
                    <div>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="Prénom">Prénom </InputLabel>
                            <OutlinedInput
                                id="Prénom"
                                type='text'
                                label="Prénom"
                                name='firstname'
                                onChange={handleChange}
                                defaultValue={orderSlice.info?.firstname}
                            />
                        </FormControl>
                        <InputError message={orderSlice.errors?.firstname} className="mt-2" ></InputError>
                    </div>
                </div>
                <div>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="phone">Téléphone</InputLabel>
                        <OutlinedInput
                            id="phone"
                            type='text'
                            label="Téléphone"
                            name='phone'
                            defaultValue={orderSlice?.info?.phone}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <InputError message={orderSlice.errors?.phone} className="mt-2" ></InputError>
                </div>
                <div>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="email">E-mail</InputLabel>
                        <OutlinedInput
                            id="email"
                            type='text'
                            label="E-mail"
                            name='email'
                            defaultValue={orderSlice?.info?.email}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <InputError message={orderSlice.errors?.email} className="mt-2" ></InputError>
                </div>

                <div>
                <FormControl fullWidth>
                    <InputLabel id="ville-label">
                        Choisir le secteur
                    </InputLabel>
                    <Select
                        labelId="ville-label"
                        id="ville-select"
                        name="ville"
                        label="Choisir le secteur"
                        defaultValue={orderSlice?.info?.ville}
                        onChange={handleChange}
                        MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                    >
                        {sectours.map(sectour=>(
                            <MenuItem value={sectour.id} key={sectour.id}>
                                {sectour.label}
                            </MenuItem>
                        ))}
                    </Select>
                    </FormControl>
                    <InputError message={orderSlice.errors?.ville}  className="mt-2 text-start" />

                </div>

                {/* <div>
                    <Autocomplete
                        disablePortal
                        id="villes"
                        defaultValue={ sectours[orderSlice?.info?.ville] }
                        options={sectours}
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) => dispatch(addInfo({"ville":value.id}))}
                        renderInput={(params) => <TextField {...params} label="" />}
                    />
                </div> */}
                <div>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="adresse">Numéro de rue / Résidence / Étage / N° Appartemment</InputLabel>
                        <OutlinedInput
                            id="adresse"
                            type='text'
                            label="Numéro de rue / Résidence / Étage / N° Appartemment"
                            name='adresse'
                            defaultValue={orderSlice?.info?.adresse}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <InputError message={orderSlice.errors?.adresse} className="mt-2" ></InputError>

                </div>
                <div>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox onChange={()=>{ setCreateAccount(!createAccount) }} />} label="Enregistrer ces informations" />
                    </FormGroup>
                </div>
                <div>
                    <TextField
                        id="comment"
                        label="Notes de commande (facultatif)"
                        className='w-full'
                        multiline
                        rows={5}
                        variant="outlined"
                        name='comment'
                        onChange={handleChange}
                        />
                </div>
            </div>
        </div>

    </div>
  )
}

export default InfoUser
