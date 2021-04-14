import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Counter from './drills/counter';
import Form from './drills/form';

const Exercise = () => {
    let { exerciseNumber } = useParams();

    return <Form />;
};

export default Exercise;
