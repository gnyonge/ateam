import { useState, useEffect } from 'react';
import { Container } from './styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import { useDispatch, useSelector } from 'react-redux';
import { setMaterial, setMethod, setRequests, setToggle } from '../../reducers/request';
import { RootState } from '../../reducers'

interface DropdownProps {
  menu: string[],
  title: string
}
const Dropdown = ({ menu, title }: DropdownProps) => {
  const [selectedName, setSelectedName] = useState<string>('');
  const data = useSelector((state: RootState) => state.request.data)
  const method = useSelector((state: RootState) => state.request.method)
  const material = useSelector((state: RootState) => state.request.material)
  const dispatch = useDispatch();
  
  const handleChange = (event: SelectChangeEvent<typeof selectedName>) => {
    setSelectedName(event.target.value); // 현재 선택한 재료 or 가공방식
    dispatch(setToggle(false)); // 필터 사용 시 상담중 off
    if (title === '가공방식') {
      const filtered = data.filter((request) => request.method.includes(event.target.value))
      dispatch(setMethod(event.target.value))
      dispatch(setRequests(filtered)) // 가공방식으로 필터링한 requests 저장
      if (material.length !== 0) { 
        const reFiltered = filtered.filter((request) => request.material.includes(material))
        dispatch(setRequests(reFiltered)) 
      }
    } else {
      const filtered = data.filter((request) => request.material.includes(event.target.value))
      dispatch(setMaterial(event.target.value)) 
      dispatch(setRequests(filtered)) // 재료로 필터링한 requests 저장
      if (method.length !== 0) { // 가공방식도 선택되어 있으면 교집합 구함
        const reFiltered = filtered.filter((request) => request.method.includes(method))
        dispatch(setRequests(reFiltered))
      }
    }
  };
  
  useEffect(() => {
    if (method.length === 0 && material.length === 0) {
      setSelectedName('') // 체크박스 해제를 위함
    }
  }, [method, material])

  return (
    <Container>
      <FormControl>
        <Select
          sx={
            selectedName.length !== 0 ? 
            { backgroundColor: '#2196F3',
              height: 32, 
              fontSize: 12,
              '&:hover': {
              border: "1px solid #2196F3",
              }}
            : 
            { backgroundColor: 'white',
              height: 32, 
              fontSize: 12,
              '&:hover': {
              border: "1px solid #2196F3",
              }}}
  
          displayEmpty
          value={selectedName}
          onChange={handleChange}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <p>{title}</p>;
            } else if (material.length !== 0 || method.length !== 0) {
              return <p style={{ color: 'white' }}>{title}(1)</p>
            } else if (material.length === 0 && method.length === 0) {
              return <p>{title}</p>;
            }
            return <p>{title}</p>;
          }}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
        >
          {menu.map((name) => (
            <MenuItem key={name} value={name} sx={{padding: 0}}>
              <Checkbox checked={selectedName.indexOf(name) > -1} />
              <p style={{ fontSize: 14, marginRight: 14 }}>{name}</p>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default Dropdown;
