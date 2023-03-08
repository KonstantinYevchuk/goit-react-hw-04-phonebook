import { FilterContainer } from "./Filter.styled"
import { Label, Input } from "components/Form/Form.styled"
export const Filter = ({value, onChange}) => {
    return (
        <FilterContainer>
        <Label>Find Contacts By Name
        <Input type="text" value={value} onChange={onChange}/>
        </Label>
        </FilterContainer>
    )
}