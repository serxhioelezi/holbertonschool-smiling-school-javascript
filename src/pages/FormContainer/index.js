import {Form} from 'react-bootstrap';

function SelectSizesExample() {
    return (
        <>
            <Form.Select>
                <option>Default select</option>
            </Form.Select>
            <br />
            <Form.Select size="sm">
                <option>Small select</option>
            </Form.Select>
        </>
    );
}

export default SelectSizesExample;