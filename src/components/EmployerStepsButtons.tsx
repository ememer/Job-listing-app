import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    step: number;
};

const EmployerStepsButtons = ({ step }: Props) => {
    return (
        <div
            className={clsx(
                (step === 1 || step === 5) && 'sglbtn',
                (step > 1 && step < 5) && 'dblbtn',
                'progressbar__btn',
            )}
        >
            {step === 1 && (
                <Link className="btn" to={'step=2'}>
                    Next step
                </Link>
            )}
            {(step > 1 && step < 5) && (
                <>
                    <Link className="btn" to={`step=${step - 1}`}>
                        Previous step
                    </Link>
                    <Link className="btn" to={`step=${step + 1}`}>
                        Next step
                    </Link>
                </>
            )}
            {step === 5 && (
                <Link className="btn" to={'step=4'}>
                    Previous step
                </Link>
            )}
        </div>
    );
};

export default EmployerStepsButtons;
