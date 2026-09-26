'use client'
import { WorkoutsContext } from '@/context/WorkoutsProvider';
import React, { useContext } from 'react';

const MyPlanPage = () => {

    const {todaysPlan} = useContext(WorkoutsContext);
console.log(todaysPlan,"fromplan")
    return (
        <div>
            <h2>My plan page</h2>
        </div>
    );
};

export default MyPlanPage;