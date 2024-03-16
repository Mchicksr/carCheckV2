import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { createCommunity, createRules,deleteCommunity, editCRules } from '../../actions/community';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const CreateCommunity = () => {
    const [commuteName, setCommuteName] = useState('')
    const [preRules, setPreRules] = useState('')
    const [communityOpt, setCommunityOpt] = useState('')
    const [communityId, setCommunityId] = useState('')
    const [editCommunity, setEditCommunity] = useState('')
    const [communityuRules, setCommunityRules] = useState('')
    const [communityName, setCommunityName] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [areYouSure, setAreYouSure] = useState(false)
    const [existingRules, setExistingRules] = useState(false)
    const [key, setKey] = useState('home');

    const communities = useSelector((state) => state.communities)
    const dispatch = useDispatch()
    const companies = [
        {
            company: "Priority Towing",
            email: "prioritytow7305@bellsouth.net"
        },
        {
            company: "Kelly Towing",
            email: "info@kellesheehanstowing.com"

        }

    ]

    useEffect(() => {


    }, [preRules]);
    useEffect(() => {
        const checkRules = () => {
            const IdExist = communities.find(com => com._id === communityId)
            if(IdExist){
                setCommuteName(IdExist?.community)
            }

            if(IdExist?.rules.length > 0){
                setExistingRules(true)
                setCommunityRules(IdExist?.rules)
            }
        }
        checkRules()
    }, [communityId]);



    const clear = () => {
        setCommuteName("")
        setPreRules("")
    }


    const convertStrToArr = async (str,e) => {
        // e.preventDefault()
        let newArr = []

        // newArr = str.split(',')
        newArr = str.split('\n')
        console.log('newArr', newArr)
        // console.log('commuteName', commuteName)
        // dispatch(createRules(commuteName,newArr))
        return newArr

    }

    const setCommunity = async (e) => {
        e.preventDefault()
        dispatch(createCommunity({ community: commuteName, tow_company: communityOpt }))
        // console.log('name,', commuteName)

        const hold =  setInterval(async ()  =>  {
           const newArr = await convertStrToArr(preRules)
           console.log('com',communities)
        //    const newId = await communities.find(community => community.community === commuteName)
        //     console.log('newId',newId)
            dispatch(createRules(commuteName,newArr,communityId))
        }, 3000);

        // const newId = await communities.find(community => community.community === commuteName)
        // console.log('newId',newId)

        return [
            hold,
            setInterval(() => {
                clearInterval(hold)

            }, 5000),
            clear()
        ]

    }

    

      
        
    const clearCommunities = () => {
        setCommunityRules('')
        setCommunityName('')
    }

    const handleCreateRules = async (e)  => {
        // console.log('communityrules',communityuRules)
        const newArr = await convertStrToArr(communityuRules);
       await dispatch(editCRules(communityId, newArr))
        clearCommunities()
    }

    return (
        <div>
            <h1>Create Community</h1>
            <div className="container">
                {/* <div className="col-6 offset-3"> */}
                <div className="col-12">


                    <form action="" onSubmit={setCommunity}>
                        <div className="form-group">
                            <label htmlFor="name">Community Name</label>
                            <input type="text" className="form-control" id="name" value={commuteName} onChange={(e) => setCommuteName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rule">Community Rule</label>
                            <textarea className="form-control" id="rule" rows="3" value={preRules} onChange={(e) => { setPreRules(e.target.value) }} />
                        </div>
                        <select name="community_id" id="community_id" value={communityOpt} onChange={(e) => setCommunityOpt(e.target.value)}>
                            <option>---select company</option>
                            {companies.map((value, index) => {
                                return <option key={index} value={value.company}>{value.company}</option>
                            })}
                        </select> <br />
                        <button type="submit" className="btn-primary btn-lg my-4">Submit</button>
                    </form>
                    <button type="button" className="btn-primary btn-lg my-4" onClick={() => setOpenModal(!openModal)}>Edit Communities</button> <br />
                    {openModal
                        ?
                        <>
                        <Tabs
                            id="community-choice"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className='justify-content-center justify-content-around'
                        >
                                <Tab eventKey="DeleteCommunity" title="Delete Community">
                                    
                                <div className="col-12">
                                    <h4>Select Community to delete</h4>
                                    <select name="community_id" id="community_id" value={communityId} onChange={(e) => setCommunityId(e.target.value)}>
                                        <option>---select community</option>
                                        {communities.map((value, index) => {
                                            return <option key={index} value={value._id}>{value.community}</option>
                                        })}
                                    </select> <br />
                                    <button type="button" className="btn-warning btn-lg my-4" onClick={()=> setAreYouSure(!areYouSure)}>Delete Community</button>
                                    {areYouSure
                                    ?
                                    <div className="row justify-content-center ">
                                        <button type="button" className="btn-primary btn-lg my-4 mr-4" onClick={()=> setAreYouSure(!areYouSure)}>No</button>
                                        <button type="button" className="btn-danger btn-lg my-4" onClick={()=> dispatch(deleteCommunity(communityId))}>Yes Delete</button>
                                    </div>
                                    :
                                    null
                                    }
                                </div>
                                </Tab>
                                <Tab eventKey="EditRules" title="Edit/Create Rules">
                                <div className="col-12">
                                    <h4 className='mt-4'>Create Rules</h4>
                                    
                                    {communityName ? <h5>Community: {communityName}</h5> : null}
                                    <form action="" >
                                     
                                         <select name="community_id" id="community_id" value={communityId} onChange={(e) => setCommunityId(e.target.value)}>
                                                <option>---select community</option>
                                                {communities.map((value,index) => {
                                                    return <option key={index} value={value._id}>{value.community}</option>
                                                })}
                                        </select> 
                            

                                    <textarea className='form-control my-4' name="" id="" cols="70" rows="20" value={communityuRules} onChange={(e) => setCommunityRules(e.target.value)} />

                                        <button type="button" className="btn-primary btn-lg mt-4" onClick={handleCreateRules}>Create Rules</button>
                                        <button type="button" className="btn-danger btn-lg mt-4 ml-4" onClick={clearCommunities}>Clear</button>
                                    </form>
                                </div>
                                </Tab>
                        </Tabs>
                        </>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    );
}

export default CreateCommunity;
