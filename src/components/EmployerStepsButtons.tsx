import clsx from 'clsx';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormContextProvider } from '../@types/FormContext';
import { FormContext } from '../Context/FormContext';
import { useEmployerForm } from '../hook/useEmployerForm';

type Props = {
    step: number;
};

const EmployerStepsButtons = ({ step }: Props) => {
    const { validationError } = useEmployerForm();
    const { stepNumber } = useContext(FormContext) as FormContextProvider;

    return (
        <div
            className={clsx(
                (step === 1 || step === 5) && 'sglbtn',
                step > 1 && step < 5 && 'dblbtn',
                'progressbar__btn',
            )}
        >
            {step === 1 && (
                <Link
                    className={clsx(
                        'btn',
                        validationError?._infoStepOne && 'disable',
                        !validationError?._infoStepOne && 'active',
                    )}
                    to={'step=2'}
                >
                    Next step
                </Link>
            )}
            {step > 1 && step < 5 && (
                <>
                    <Link className="btn active" to={`step=${step - 1}`}>
                        Previous step
                    </Link>
                    <Link
                        className={clsx(
                            'btn',
                            [stepNumber === 2 && validationError?._infoStepTwo ? 'disable' : 'active'],
                            [stepNumber === 3 && validationError?._infoStepThree ? 'disable' : 'active'],
                            [stepNumber === 4 && validationError?._infoStepFour ? 'disable' : 'active'],
                        )}
                        to={`step=${step + 1}`}
                    >
                        Next step
                    </Link>
                </>
            )}
            {step === 5 && (
                <Link className="btn active" to={'step=4'}>
                    Previous step
                </Link>
            )}
        </div>
    );
};

export default EmployerStepsButtons;
