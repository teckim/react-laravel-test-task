import React, { useEffect, useState, useMemo, useRef } from 'react'
import { TextField, Autocomplete, CircularProgress } from '@mui/material'
import { debounce } from '@mui/material/utils'
import UniversityService from '../services/universityService'

const MIN_CHARS = 3

function UniversitySearchBox({ onSelect }) {
  const [searchValue, setSearchValue] = useState('')
  const [universities, setUniversities] = useState([])
  const loading = useRef(false)
  const noOptionsText = useMemo(
    () =>
      searchValue?.length < MIN_CHARS
        ? `Type at least ${MIN_CHARS} character to search`
        : 'No Universities found',
    [searchValue]
  )

  const fetch = useMemo(
    () =>
      debounce((query, callback) => {
        UniversityService.search(query).then((data) => callback(data))
      }, 400),
    []
  )

  useEffect(() => {
    let active = true

    if (searchValue.length < MIN_CHARS) return undefined

    loading.current = true
    fetch(searchValue, (data) => {
      if (active) {
        if (data) setUniversities([...data])

        loading.current = false
      }
    })

    return () => {
      active = false
    }
  }, [searchValue, fetch])

  const onInputChange = (_, newInputValue, reason) =>
    reason === 'input' && setSearchValue(newInputValue)

  const onChange = (_, newValue) => {
    onSelect(newValue)
    setSearchValue('')
    setUniversities([])
  }

  const getOptionLabel = (option) =>
    typeof option === 'string' ? option : option.name

  const isOptionEqualToValue = (option, selectedValue) =>
    option.name === selectedValue.name

  return (
    <Autocomplete
      clearOnBlur
      blurOnSelect
      options={universities}
      getOptionLabel={getOptionLabel}
      inputValue={searchValue}
      value={null}
      autoSelect={false}
      noOptionsText={noOptionsText}
      isOptionEqualToValue={isOptionEqualToValue}
      onChange={onChange}
      onInputChange={onInputChange}
      groupBy={(option) => option.country}
      filterOptions={(x) => x}
      renderOption={(props, option) => (
        <OptionItem {...props} label={option.name} key={option.id} />
      )}
      renderInput={(props) => (
        <SearchInput
          {...props}
          value={searchValue}
          isLoading={loading.current}
        />
      )}
    />
  )
}

function SearchInput({ value, isLoading, ...props }) {
  return (
    <TextField
      {...props}
      value={value}
      label="Search universities"
      placeholder="Search by University Name, Country or Domain"
      InputProps={{
        ...props.InputProps,
        endAdornment: (
          <>
            {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
            {props.InputProps.endAdornment}
          </>
        ),
      }}
    />
  )
}

function OptionItem({ label, ...props }) {
  return <li {...props}>{label}</li>
}

export default UniversitySearchBox
