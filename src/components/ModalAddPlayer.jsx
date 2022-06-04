import React, { useState, useEffect } from "react";
import { Button, Modal, InputGroup, FormControl, Row } from "react-bootstrap";

const ModalAddPlayer = ({show, handleClose, functionModal, dataUpdate, functionModalEdit}) => {

    const [form, setForm] = useState({});

    useEffect(() => {
        if(!dataUpdate.name) return;
        setForm(dataUpdate)
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


    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{ dataUpdate.name ? 'Editar' : 'Guardar nuevo'} jugador</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>Nombre</InputGroup.Text>
                            <FormControl name='name' aria-label="Nombre" value={form.name ? form.name : ''} onChange={onChangeForms} />
                        </InputGroup>
                    </Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>Posisción</InputGroup.Text>
                            <FormControl name='positions' aria-label="Posisción" value={form.positions ? form.positions : ''} onChange={onChangeForms} />
                        </InputGroup>
                    </Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>Equipo</InputGroup.Text>
                            <FormControl name='teams' aria-label="Equipo" value={form.teams ? form.teams : ''} onChange={onChangeForms} />
                        </InputGroup>
                    </Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>Nacionalidad</InputGroup.Text>
                            <FormControl name='nationality' aria-label="Nacionalidad" value={form.nationality ? form.nationality : ''} onChange={onChangeForms} />
                        </InputGroup>
                    </Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>RIT</InputGroup.Text>
                            <FormControl type='number' name='rit' aria-label="RIT" value={form.rit ? form.rit : ''} onChange={onChangeForms} />
                        </InputGroup>
                    </Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>PAS</InputGroup.Text>
                            <FormControl type='number' name='pas' aria-label="PAS" value={form.pas ? form.pas : ''} onChange={onChangeForms} />
                        </InputGroup>
                    </Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>DEF</InputGroup.Text>
                            <FormControl type='number' name='def' aria-label="DEF" value={form.def ? form.def : ''} onChange={onChangeForms} />
                        </InputGroup>
                    </Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>TIR</InputGroup.Text>
                            <FormControl type='number' name='tir' aria-label="TIR" value={form.tir ? form.tir : ''} onChange={onChangeForms} />
                        </InputGroup>
                    </Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>REG</InputGroup.Text>
                            <FormControl type='number' name='reg' aria-label="REG" value={form.reg ? form.reg : ''} onChange={onChangeForms} />
                        </InputGroup>
                    </Row>
                    <Row className="col-md-6">
                        <InputGroup size='sm' className="mb-3">
                            <InputGroup.Text>FIS</InputGroup.Text>
                            <FormControl type='number' name='fis' aria-label="FIS" value={form.fis ? form.fis : ''} onChange={onChangeForms} />
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