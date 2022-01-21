import React ,{useState,useEffect} from 'react'
import {Col,Row,Link} from 'react-bootstrap' 
import Restaurants from './Restaurants'
import {listRestaurants} from './Actions/restaurantAction'
import {useDispatch,useSelector} from 'react-redux'
import { restaurantListReducer } from '../reducers/restaurantReducers'
function Home() {

    const dispatch=useDispatch();

    const restaurantReducer=useSelector(state=> state.restaurantReducer)

    const {restaurants}=restaurantReducer

useEffect(() => {
    dispatch(listRestaurants)

}, [])


    return (
            <>

        {restaurants ? (
            <Row>
                {restaurants.map(item =>(
                    <Col sm={12} md={8} lg={6} xl={3}>
                        <Restaurants item={item} />
                    </Col>
                ))}
            </Row>
        ): null}
                    
            </>
    )
}

export default Home
