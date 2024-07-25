import Select from 'react-select';
import { genders, languageSpoken, preferredTime, specialties, visitReasons } from "@/data/data";
import {
    Box,
    Text,
    Divider,
    CheckboxGroup,
    Checkbox,
    Radio,
    RadioGroup,
    Stack,
} from "@chakra-ui/react";
import { useState } from 'react';


const multiSelectStyles = {
    control: (provided) => ({
        ...provided,
        minHeight: '56px',
        borderColor: '#E2E8F0',
        boxShadow: 'none',
        '&:hover': {
            borderColor: '#CBD5E0',
        },
    }),
    multiValue: (provided) => ({
        ...provided,
        backgroundColor: '#EDEAF5',
        borderRadius: '12px',
        padding: '2px 8px',
        margin: '2px',
    }),
    multiValueLabel: (provided) => ({
        ...provided,
        color: '#3B3E4A',
        fontWeight: '500',
    }),
    multiValueRemove: (provided) => ({
        ...provided,
        color: '#000',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'black',
            color: 'white', // White color on hover
        },
    }),
    placeholder: (provided) => ({
        ...provided,
        color: '#A4B2C1',
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: '12px',
        overflow: 'hidden',
    }),
    menuList: (provided) => ({
        ...provided,
        padding: '0',
    }),
    option: (provided, state) => ({
        ...provided,
        padding: '12px 16px',
        backgroundColor: state.isFocused ? '#EDEAF5' : 'white',
        color: '#3B3E4A',
        '&:hover': {
            backgroundColor: '#EDEAF5',
        },
    }),
};

export default function SearchFilter() {

    const [selectedReasons, setSelectedReasons] = useState([
        { value: 'anxiety', label: 'Anxiety' },
        { value: 'alcoholism', label: 'Alcoholism' },
    ]);
    const [selectedSpecialty, setSelectedSpecialty] = useState([
        { value: 'psychology', label: 'Psychology' },
    ]);
    const [selectedLangauges, setSelectedLangauges] = useState([
        { value: 'english', label: 'English' },
    ]);

    const handleReasonsChange = (selectedOptions) => {
        setSelectedReasons(selectedOptions || []);
    };

    const handleSpecialtyChange = (selectedOptions) => {
        setSelectedSpecialty(selectedOptions || []);
    };

    const handleLangaugesChange = (selectedOptions) => {
        setSelectedLangauges(selectedOptions || []);
    };


    return (
        <Box borderRadius={"20px"} border={"1px"} borderColor={"gray.200"} p="20px">

            <Text fontWeight="bold" fontSize={"18px"}>
                All Filter
            </Text>

            <Box py="20px">
                <Divider />
            </Box>

            <Box mt="10px">

                <Text fontWeight="bold" fontSize={"16px"}>
                    Preferred Time
                </Text>

                <CheckboxGroup>
                    <Stack direction="column" spacing={4} mt="10px">
                        {preferredTime.map((time) => (
                            <Checkbox value={time}>
                                {time}
                            </Checkbox>
                        ))}
                    </Stack>
                </CheckboxGroup>

            </Box>

            <Box mt="20px">

                <Text fontWeight="bold" fontSize={"16px"}>
                    Provider Gender
                </Text>

                <RadioGroup>
                    <Stack direction="column" spacing={4} mt="10px">
                        {genders.map((gender) => (
                            <Radio defaultChecked={gender === "No Preference"} value={gender}>
                                {gender}
                            </Radio>
                        ))}
                    </Stack>
                </RadioGroup>

            </Box>

            {/* visit reason */}
            <Box mt="20px">

                <Text fontWeight="bold" fontSize={"16px"}>
                    Visit Reason
                </Text>

                <Box mt="10px">
                    <Select
                        isMulti
                        options={visitReasons}
                        value={selectedReasons}
                        onChange={handleReasonsChange}
                        styles={multiSelectStyles}
                        placeholder="Select visit reasons..."
                    />
                </Box>
            </Box>

            {/* Specialty */}
            <Box mt="20px">

                <Text fontWeight="bold" fontSize={"16px"}>
                    Specialty
                </Text>

                <Box mt="10px">
                    <Select
                        isMulti
                        options={specialties}
                        value={selectedSpecialty}
                        onChange={handleSpecialtyChange}
                        styles={multiSelectStyles}
                        placeholder="Select specialties..."
                    />
                </Box>
            </Box>

            {/* rating/review */}

            {/* Language Spoken */}
            <Box mt="20px">

                <Text fontWeight="bold" fontSize={"16px"}>
                    Language Spoken
                </Text>

                <Box mt="10px">
                    <Select
                        isMulti
                        options={languageSpoken}
                        value={selectedLangauges}
                        onChange={handleLangaugesChange}
                        styles={multiSelectStyles}
                        placeholder="Select languages..."
                    />
                </Box>
            </Box>

        </Box>
    );
}
