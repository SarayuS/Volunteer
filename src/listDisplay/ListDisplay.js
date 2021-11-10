import React, {useEffect, useState} from 'react';
import {getList} from '../service/ListService';

function ListDisplay () {

    useEffect(() => {
        getDisplayList()
    },[])

    const [list, setList] = useState();

    const getDisplayList = async() => {
        try {
            const res = await getList();
            if(res.data) {
                setList(res.data)
            }
        } catch(err) {
            console.error(`getDisplayList error: ${err}`)
        } finally {
            console.log(`getDisplayList completed`)
        }
    }

    return (
        <div> 
        <h1> {list.title} </h1>
        <p> {list.summary} </p>
        </div>
    )

}

export default ListDisplay;