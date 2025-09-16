import React, { useEffect, useRef } from 'react';
import './Checkbox.css';

const Checkbox = ({
  checked = false,
  indeterminate = false,
  error = false,
  variant = 'primary',
  onChange,
  label,
  disabled = false,
  className = '',
  size = 'medium',
  color,
  ...props
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  // Simple color mapping
  const variantColors = {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#dc2626',
    neutral: '#6b7280'
  };

  const actualVariant = error ? 'error' : variant;
  const checkboxColor = color || variantColors[actualVariant] || variantColors.primary;

  const wrapperClass = [
    'checkbox-wrapper',
    `checkbox-${size}`,
    disabled && 'checkbox-disabled',
    className
  ].filter(Boolean).join(' ');

  const checkboxSize = size === 'small' ? 16 : size === 'large' ? 24 : 20;
  const strokeWidth = size === 'small' ? 1.5 : 2;
  const borderRadius = size === 'small' ? 2 : size === 'large' ? 4 : 3;

  const checkmarkPath = indeterminate
    ? `M${checkboxSize * 0.25},${checkboxSize * 0.5} L${checkboxSize * 0.75},${checkboxSize * 0.5}`
    : `M${checkboxSize * 0.25},${checkboxSize * 0.5} L${checkboxSize * 0.45},${checkboxSize * 0.7} L${checkboxSize * 0.75},${checkboxSize * 0.3}`;

  // Simple inline styles for guaranteed color application
  const backgroundColor = (checked || indeterminate) && !disabled ? checkboxColor : 'white';
  const borderColor = disabled ? '#e5e7eb' : (checked || indeterminate) ? checkboxColor : '#d1d5db';
  const checkmarkColor = 'white';

  return (
    <label className={wrapperClass}>
      <input
        ref={inputRef}
        type="checkbox"
        className="checkbox-input"
        checked={checked}
        onChange={onChange || (() => {})}
        disabled={disabled}
        {...props}
      />
      <div className="checkbox-custom">
        <svg
          className="checkbox-svg"
          width={checkboxSize}
          height={checkboxSize}
          viewBox={`0 0 ${checkboxSize} ${checkboxSize}`}
        >
          <rect
            className="checkbox-background"
            width={checkboxSize}
            height={checkboxSize}
            rx={borderRadius}
            fill={backgroundColor}
            stroke={borderColor}
            strokeWidth={1.5}
          />
          {(checked || indeterminate) && (
            <path
              className="checkbox-checkmark"
              d={checkmarkPath}
              stroke={checkmarkColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          )}
        </svg>
      </div>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
};

export default Checkbox;