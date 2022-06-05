import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { generateMean } from '../helpers/generateMean';

const CardPlayer = ({data, functionDelete, functionEdit}) => {

    return (
        <div className='cardPlayer my-2 mx-2 animate__animated animate__fadeInDown'>
            <div className='cardPlayerHeader pt-2 '>
                <Col className='text-center'>
                    <h3><b>{data.name}</b></h3>
                </Col>
                <Col className='text-center'>
                    <h4 className='col-12'><b>{generateMean(data)} - {data.positions}</b></h4>
                    <h6 className='col-12'><b>{data.teams}</b></h6>
                    <h6 className='col-12'><b>{data.nationality}</b></h6>
                </Col>
            </div>
            <Row className='col-md-12 mx-3'>
                <Col className='md-4'>
                    <h6><b>RIT: </b>{data.rit}</h6>
                </Col>
                <Col className='md-4'>
                    <h6><b>TIR: </b>{data.tir}</h6>
                </Col>
            </Row>
            <Row className='col-md-12 mx-3'>
                <Col className='md-4'>
                    <h6><b>PAS: </b>{data.pas}</h6>
                </Col>
                <Col className='md-4'>
                    <h6><b>REG: </b>{data.reg}</h6>
                </Col>
            </Row>
            <Row className='col-md-12 mx-3'>
                <Col className='md-4'>
                    <h6><b>DEF: </b>{data.def}</h6>
                </Col>
                <Col className='md-4'>
                    <h6><b>FIS: </b>{data.fis}</h6>
                </Col>
            </Row>
            <Row className='col-md-12 mx-1 d-flex justify-content-center mt-1'>
                <Button className='btn btn-sm col-sm-5 col-md-4 mx-1 btn-success'
                    onClick={() => functionEdit(data)}
                >
                    Editar
                </Button>
                <Button 
                    className='btn btn-sm col-sm-5 col-md-4 mx-1 btn-danger' 
                    onClick={() => functionDelete(data.id)}
                >
                    Eliminar
                </Button>
            </Row>
        </div>
    )

}

export default CardPlayer;