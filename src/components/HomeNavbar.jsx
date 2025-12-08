import React, { useEffect, useState } from 'react'
import { FaFireAlt } from "react-icons/fa";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { RiMovie2Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { getMovieBySortAndAscending } from '../redux/slices/movieSlice';

function HomeNavbar() {

    const dispatch = useDispatch();
    const [sort, setSort] = useState("");
    const [ascending, setAscending] = useState("");

    const handleChance = ({ target: { value } }) => {
        setSort(value);
    }

    const handleChance2 = ({ target: { value } }) => {
        setAscending(value);
    }

    useEffect(() => {
        if (sort && ascending) {
            dispatch(getMovieBySortAndAscending({ sort, ascending }));
        }
    }, [sort, ascending, dispatch]);

    return (
        <div className='homeNavbar-main'>
            <div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <h2 id='movieType' style={{ color: "red" }} >Popular  </h2>
                    <RiMovie2Fill style={{ marginLeft: "10px", fontSize: "25px", color: "red" }} />
                </div>
            </div>
            <div className='homeNavbar-options'>

                <FormControl sx={{ m: 1, minWidth: 120, color: "#00a6ffff" }} size='small' >
                    <InputLabel sx={{ color: "#00a6ffff" }} id="demo-simple-select-label">SortBy</InputLabel>
                    <Select
                        value={sort}
                        onChange={handleChance}
                        label="Age"
                        sx={{
                            color: "#00a6ffff",
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#00a6ffff",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#00a6ffff",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#00a6ffff",
                            },
                            "& .MuiSvgIcon-root": {
                                color: "#00a6ffff", // ok işareti de beyaz olsun
                            },
                        }}
                    >
                        <MenuItem sx={{ color: "#00a6ffff" }} value={"release_date"}>ReleaseDate</MenuItem>
                        <MenuItem sx={{ color: "#00a6ffff" }} value={"popularity"}>Popularity</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120 }} size='small' >
                    <InputLabel sx={{ color: "#00a6ffff" }} id="demo-simple-select-label">Ascending</InputLabel>
                    <Select
                        value={ascending}
                        onChange={handleChance2}
                        label="Age"
                        sx={{
                            color: "#00a6ffff",
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#00a6ffff",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#00a6ffff",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#00a6ffff",
                            },
                            "& .MuiSvgIcon-root": {
                                color: "#00a6ffff", // ok işareti de beyaz olsun
                            },
                        }}
                    >
                        <MenuItem sx={{ color: "#00a6ffff" }} value={"asc"}>increasing </MenuItem>
                        <MenuItem sx={{ color: "#00a6ffff" }} value={"desc"}>decreasing</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default HomeNavbar