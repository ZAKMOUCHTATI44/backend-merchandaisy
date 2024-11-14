import InputError from '@/Components/InputError';
import { setData } from '@/features/calculatorSlice'
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Scroll from 'react-scroll';
const Step5 = () => {
    // const [values, setValues] = React.useState({
    //     taille: '',
    //     poids: '',
    //     objectifPoids: '',
    // });
    const errors=useSelector(state=>state.calculatorSlice.errors)
    const data=useSelector(state=>state.calculatorSlice.data)
    const dispatch=useDispatch()
    const handleChange = (prop) => (event) => {
        dispatch(setData({[prop]:event.target.value}))
    };
    useEffect(()=>{
        let scroller = Scroll.scroller;
        scroller.scrollTo('steps')
    },[])
  return (
    <div className="text-start">
        <div>
            <h2 className='text-start font-bold text-xl mt-3 mb-5'>
                Combien mesurez-vous ?
            </h2>
            <div className="w-1/2 mt-3">
                <FormControl sx={{width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="Taille">Taille</InputLabel>
                <OutlinedInput
                    id="Taille"
                    error={errors?.taille}
                    type='text'
                    defaultValue={data?.taille}
                    onChange={handleChange('taille')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        style={{ fontSize:"12px" }}
                        edge="end"
                        >
                        cm
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Taille"
                />
                </FormControl>
                <InputError message={errors?.taille}  className="mt-2 text-start" />
            </div>
        </div>
        <div className="my-5">
            <h2 className='text-start font-bold text-xl mt-3 mb-3'>
                Combien pesez-vous ?
            </h2>
            <p className='text-gray-500'>
            Vous pouvez indiquer une estimation et mettre cette information à jour plus tard.
            </p>
            <div>
            <div className='w-1/2 mt-4'>
                <FormControl sx={{width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="Poids">Poids</InputLabel>
                <OutlinedInput
                    id="Poids"
                    type='text'
                    error={errors?.poids}
                    defaultValue={data?.poids}
                    onChange={handleChange('poids')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        style={{ fontSize:"12px" }}
                        edge="end"
                        >
                        Kg
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Poids"
                />
                </FormControl>
                <InputError message={errors?.poids}  className="mt-2 text-start" />
            </div>
            </div>
        </div>
        <div>
            <h2 className='text-start font-bold text-xl mt-3 mb-3'>
                Quel est votre objectif de poids ?
            </h2>
            <p className='text-gray-500'>
                Ne vous inquiétez pas, cela n'affecte pas votre objectif
                calorique quotidien, et vous pourrez toujours le changer plus tard.
            </p>
            <div>
            <div className='w-1/2 mt-4'>
                <FormControl sx={{width: '25ch' }} variant="outlined">
                <InputLabel htmlFor="Objectif de poids">Objectif de poids</InputLabel>
                <OutlinedInput
                    id="Objectif de poids"
                    type='text'
                    defaultValue={data?.objectifPoids}
                    errors={errors?.objectifPoids}
                    onChange={handleChange('objectifPoids')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        style={{ fontSize:"12px" }}
                        edge="end"
                        >
                        Kg
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Objectif de poids"
                />
                </FormControl>
                <InputError message={errors?.objectifPoids}  className="mt-2 text-start" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Step5
