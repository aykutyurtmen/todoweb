import React, { useState, useCallback, Fragment } from 'react';
import ConfirmationDialog from './ConfirmationDialog';

import { createContext } from 'react';

export const Context = createContext({});


const DEFAULT_OPTIONS = {
  title: 'Are you sure?',
  description: '',
  confirmationText: 'Ok',
  cancellationText: 'Cancel',
  dialogProps: {},
  dialogTitleProps: {},
  dialogContentProps: {},
  dialogContentTextProps: {},
  confirmationButtonProps: {},
  cancellationButtonProps: {},
};

const buildOptions = (defaultOptions, options) => {
  const dialogProps = {
    ...(defaultOptions.dialogProps || DEFAULT_OPTIONS.dialogProps),
    ...(options.dialogProps || {}),
  };
  const dialogTitleProps = {
    ...(defaultOptions.dialogTitleProps || DEFAULT_OPTIONS.dialogTitleProps),
    ...(options.dialogTitleProps || {}),
  };
  const dialogContentProps = {
    ...(defaultOptions.dialogContentProps || DEFAULT_OPTIONS.dialogContentProps),
    ...(options.dialogContentProps || {}),
  };
  const dialogContentTextProps = {
    ...(defaultOptions.dialogContentTextProps || DEFAULT_OPTIONS.dialogContentTextProps),
    ...(options.dialogContentTextProps || {}),
  };
  const confirmationButtonProps = {
    ...(defaultOptions.confirmationButtonProps || DEFAULT_OPTIONS.confirmationButtonProps),
    ...(options.confirmationButtonProps || {}),
  };
  const cancellationButtonProps = {
    ...(defaultOptions.cancellationButtonProps || DEFAULT_OPTIONS.cancellationButtonProps),
    ...(options.cancellationButtonProps || {}),
  };

  return {
    ...DEFAULT_OPTIONS,
    ...defaultOptions,
    ...options,
    dialogProps,
    dialogTitleProps,
    dialogContentProps,
    dialogContentTextProps,
    confirmationButtonProps,
    cancellationButtonProps,
  }
};

const ConfirmProvider = ({ children, defaultOptions = {} }) => {
  const [options, setOptions] = useState({ ...DEFAULT_OPTIONS, ...defaultOptions });
  const [resolveReject, setResolveReject] = useState([]);
  const [resolve, reject] = resolveReject;

  const confirm = useCallback((options = {}) => {
    return new Promise((resolve, reject) => {
      setOptions(buildOptions(defaultOptions, options));
      setResolveReject([resolve, reject]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = useCallback(() => {
    setResolveReject([]);
  }, []);

  const handleCancel = useCallback(() => {
    reject();
    handleClose();
  }, [reject, handleClose]);

  const handleConfirm = useCallback(() => {
    resolve();
    handleClose();
  }, [resolve, handleClose]);

  return (
    <Fragment>
      <Context.Provider value={confirm}>
        {children}
      </Context.Provider>
      <ConfirmationDialog
        open={resolveReject.length === 2}
        options={options}
        onClose={handleClose}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </Fragment>
  );
};

export default ConfirmProvider;
