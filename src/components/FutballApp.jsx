import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

import CardPlayer from "./CardPlayer";
import ModalAddPlayer from "./ModalAddPlayer";
import { getPlayers, deletePlayer, insertPlayer, updatePlayer } from "../helpers/api";
import { useModal } from "../hooks/useModal";

const FutballApp = () => {

    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

    const [show, toogle] = useModal();

    useEffect(() => {
        getPlayer();
    },[])

    const getPlayer = () => {
        setPlayers([]);
        setLoading(true);
        getPlayers()
            .then(resp => {
                setPlayers(resp)
                setLoading(false)
            })
    }

    const onClickInserPlayer = (data) => {
        insertPlayer(data)
            .then(resp => {
                toast.success('Jugador creado con éxito')
                toogle();
                getPlayer();
            })
    }

    const onClickDeletePlayer = (id) => {
        deletePlayer(id)
            .then(resp => {
                toast.success('Jugador eliminado con éxito')
                getPlayer();
            })
    }

    const onClickModalUpdatePlayer = (data) => {
        setDataUpdate(data);
        toogle();
    }

    const onClickModalAddPlayer = () => {
        setDataUpdate({});
        toogle();
    }

    const oncClickUpdatePlayer = (data) => {
        updatePlayer(data)
            .then(resp => {
                toast.success('Jugador actualizado con éxito')
                toogle();
                getPlayer();
            })
    }

    return (
        <>
            {show && 
                <ModalAddPlayer 
                    show={show} handleClose={toogle} 
                    functionModal={onClickInserPlayer} 
                    dataUpdate={dataUpdate} functionModalEdit={oncClickUpdatePlayer}
                />
            }
            <div className="col-md-12 text-center">
                <h1 className="titlePlayer">Players Soccer</h1>
            </div>
            <div className="col-md-12 my-2 d-flex justify-content-end">
                <Button className="btn-success mx-4"
                    onClick={onClickModalAddPlayer}
                >
                    Agregar
                </Button>
            </div>
            <div className="m-3 row">
                {loading ? 
                    <Spinner />
                    :
                    players.map((item,index) => (
                        <CardPlayer
                            data={item}
                            key={index}
                            functionDelete={onClickDeletePlayer}
                            functionEdit={onClickModalUpdatePlayer}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default FutballApp;