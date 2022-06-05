import React, { useState, useEffect } from "react";
import { Button, Modal, InputGroup, FormControl, Row, Form } from "react-bootstrap";
import { getPlayersApi } from "../helpers/api";

const ModalAddPlayer = ({show, handleClose, functionModal, dataUpdate, functionModalEdit}) => {

    const [form, setForm] = useState({});
    const [search, setSearch] = useState('');
    const [options, setOptions] = useState([]);
    const [validate, setValidate] = useState(true);
    const [select, setSelect] = useState('');

    useEffect(() => {
        if(!dataUpdate.name) return;
        setForm(dataUpdate);
        setValidate(false);
    },[dataUpdate])

    const onChangeForms = ({target}) => {

        let value;
        if(target.name === 'name' || target.name === 'positions' || target.name === 'teams' || target.name === 'nationality') {
            value = target.value;
        } else {
            value = parseInt(target.value);
        }

        let data = {
            ...form,
            [target.name]: value
        }

        setForm(data);
    }

    const onClickButtonSearch = () => {
        setValidate(true);
        setForm({});
        setOptions([]);
        setSelect('');
        getPlayersApi(search)
            .then(resp => {
                setOptions(resp)
            })
    }

    const onChangeSelect = ({target}) => {
        let data = options[target.value];

        let newForm = {
            name: data.player_name,
            teams: data.team_name,
            nationality: data.player_country
        }
        setSelect(target.value)
        setForm(newForm);
        setValidate(false);
    }


    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{ dataUpdate.name ? 'Editar' : 'Guardar nuevo'} jugador</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    {!dataUpdate.name && 
                        <>
                            <Row className="col-md-12">
                                <InputGroup size='sm' className="mb-3">
                                    <Button disabled={!search} onClick={onClickButtonSearch}>
                                        Buscar
                                    </Button>
                                    <FormControl name='search' aria-label="Buscar" value={search} onChange={({target}) => setSearch(target.value)} />
                                </InputGroup>
                            </Row>
                            <Row className="col-md-12">
                                <InputGroup size='sm' className="mb-3">
                                    <InputGroup.Text>Resultados</InputGroup.Text>
                                    <Form.Select onChange={onChangeSelect} value={select}>
                                        <option>Seleccione una opción...</option>
                                        {options.map((item, index) => {
                                            return (
                                                <option key={index} value={index}>
                                                    {item.player_name}
                                                </option>
                                            )
                                        })}
                                    </Form.Select>
                                </InputGroup>
                            </Row>
                        </>
                    }
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>Nombre</InputGroup.Text>
                            <FormControl name='name' aria-label="Nombre" value={form.name ? form.name : ''} onChange={onChangeForms} disabled={validate} />
                        </InputGroup>
                    </Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>Posisción</InputGroup.Text>
                            <FormControl name='positions' aria-label="Posisción" value={form.positions ? form.positions : ''} onChange={onChangeForms} disabled={validate} />
                        </InputGroup>
                    </Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>Equipo</InputGroup.Text>
                            <FormControl name='teams' aria-label="Equipo" value={form.teams ? form.teams : ''} onChange={onChangeForms} disabled={validate} />
                        </InputGroup>
                    </Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>Nacionalidad</InputGroup.Text>
                            <FormControl name='nationality' aria-label="Nacionalidad" value={form.nationality ? form.nationality : ''} onChange={onChangeForms} disabled={validate} />
                        </InputGroup>
                    </Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>RIT</InputGroup.Text>
                            <FormControl type='number' name='rit' aria-label="RIT" value={form.rit ? form.rit : ''} onChange={onChangeForms} disabled={validate} />
                        </InputGroup>
                    </Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>PAS</InputGroup.Text>
                            <FormControl type='number' name='pas' aria-label="PAS" value={form.pas ? form.pas : ''} onChange={onChangeForms} disabled={validate} />
                        </InputGroup>
                    </Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>DEF</InputGroup.Text>
                            <FormControl type='number' name='def' aria-label="DEF" value={form.def ? form.def : ''} onChange={onChangeForms} disabled={validate} />
                        </InputGroup>
                    </Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>TIR</InputGroup.Text>
                            <FormControl type='number' name='tir' aria-label="TIR" value={form.tir ? form.tir : ''} onChange={onChangeForms} disabled={validate} />
                        </InputGroup>
                    </Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>REG</InputGroup.Text>
                            <FormControl type='number' name='reg' aria-label="REG" value={form.reg ? form.reg : ''} onChange={onChangeForms} disabled={validate} />
                        </InputGroup>
                    </Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>FIS</InputGroup.Text>
                            <FormControl type='number' name='fis' aria-label="FIS" value={form.fis ? form.fis : ''} onChange={onChangeForms} disabled={validate} />
                        </InputGroup>
                    </Row>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={() => dataUpdate.name ? functionModalEdit(form) : functionModal(form)}
                    disabled={!form.name || !form.positions || !form.teams || !form.nationality || !form.rit ||
                        !form.pas || !form.def || !form.tir || !form.reg || !form.fis ? true : false
                    }
                >
                    { dataUpdate.name ? 'Editar' : 'Guardar'}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAddPlayer;