import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'


const TextInputGroup = (
    {
        name,
        label,
        value,
        placeholder,
        type,
        onChange,
        error
    }) => {
    return (
        /*<div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} className="is-invalid form-control form-control-lg"
                   placeholder={placeholder} value={value}
                   onChange={onChange}/>
            <div className="invalid-feedback">This is wrong</div>
        </div>*/
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} className={classnames('form-control form-control-lg',{
            //class name that we want on passing that condition
            'is-invalid':error
        })}
               placeholder={placeholder} value={value}
               onChange={onChange}/>
        {error && <div className="invalid-feedback">{error}</div>}
    </div>
    );
};
TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    error:PropTypes.string
};
TextInputGroup.defaultProps = {
    type: 'text'
};
export default TextInputGroup;
