import classNames from 'classnames';
import React, { ChangeEvent, InputHTMLAttributes, forwardRef } from 'react';
import './TextField.scss';
export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: boolean;
	variant?: 'search' | 'fill';
	errorMessage?: string;
	value?: string | number;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	({ className, value, error = false, errorMessage, variant, label, onChange, ...props }, ref) => {
		return (
			<>
				{label && <span className={"caption"}>{label}</span>}
				<input
					data-testid="input"
					ref={ref}
					className={classNames(
						className,
						"textField",
						variant === 'search' && "search",
						variant === 'fill' && "fill",
						error === true && "error",
					)}
					value={value}
					onChange={onChange}
					{...props}
				/>
				{errorMessage && <span className={"errorMessage"}>{errorMessage}</span>}
			</>
		);
	},
);

TextField.displayName = 'TextField';
