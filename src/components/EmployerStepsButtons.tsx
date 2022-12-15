import React, { useContext } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { FormContextProvider } from '../@types/FormContext';
import { FormContext } from '../Context/FormContext';
import { useEmployerForm } from '../hook/useEmployerForm';

import './FormButtons.css';

type Props = {
    step: number;
};

const EmployerStepsButtons = ({ step }: Props) => {
    const { unlockedSteps } = useEmployerForm();
    const { unlockSteps } = useContext(FormContext) as FormContextProvider;

    return (
        <div
            className={clsx(
                (step === 1 || step === 5) && 'sglbtn',
                step > 1 && step <= 5 && 'dblbtn',
                'progressbar__btn',
            )}
        >
            {step === 1 && (
                <button
                    disabled={unlockedSteps?.isDisable ?? true}
                    onClick={() => unlockSteps(unlockedSteps?.enableStep ?? 0)}
                >
                    <Link className={clsx('btn', (unlockedSteps?.isActive && 'active') ?? 'disable')} to={'step=2'}>
                        Next step
                    </Link>
                </button>
            )}
            {step > 1 && step < 6 && (
                <>
                    <Link className="btn active" to={`step=${step - 1}`}>
                        Previous step
                    </Link>
                    <button
                        disabled={unlockedSteps?.isDisable ?? true}
                        onClick={() => unlockSteps(unlockedSteps?.enableStep ?? 0)}
                    >
                        <Link
                            className={clsx('btn', (unlockedSteps?.isActive && 'active') ?? 'disable')}
                            to={`step=${step + 1}`}
                        >
                            {step === 5 ? 'Summary' : 'Next step'}
                        </Link>
                    </button>
                </>
            )}
            {step === 6 && (
                <>
                    <Link className="btn active" to={`step=${step - 1}`}>
                        Previous step
                    </Link>
                    <button className={clsx('btn', 'active')}>Create Job offer</button>
                </>
            )}
        </div>
    );
};

export default EmployerStepsButtons;
