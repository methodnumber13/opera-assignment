import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { ModalState } from '../../context';

const BodyCell = ({ children }) => <td>{children}</td>;

const AdditionalInfoWrapper = styled.div`
  flex-direction: row;
  display: flex;
  gap: 10em;
  align-items: flex-start;
`;

const AdditionalWrapperInside = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const InternalText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 28rem;
  -webkit-line-clamp: 4;
  -webkit-box-orient: horizontal;
`;

const Tr = ({ data, index, show, setModal }) => {
  const { from, to, hash, ...rest } = data;

  return (
    <tr
      style={{ cursor: 'pointer' }}
      onClick={() => setModal({ show: !show, body: () => AdditionalInfo(rest) })}>
      {[from, to, hash].map((value, i) => (
        <BodyCell key={`table-td${index + i}`}>{value}</BodyCell>
      ))}
    </tr>
  );
};
const keyCallback = ({ i, rest }) => <InternalText>{Object.keys(rest)[i]}</InternalText>;

const valueCallback = ({ value }) => <InternalText>{value}</InternalText>;

const AdditionalInfoCallback = ({ rest }) => (
  <AdditionalInfoWrapper>
    {[keyCallback, valueCallback].map((Callback, index) => (
      <AdditionalWrapperInside key={`callback${index}`}>
        {Object.values(rest).map((value, i) => (
          <AdditionalWrapperInside key={`add-inside${i}`}>
            <Callback i={i} value={value} rest={rest} />
          </AdditionalWrapperInside>
        ))}
      </AdditionalWrapperInside>
    ))}
  </AdditionalInfoWrapper>
);

const AdditionalInfo = props => {
  const { blockNumber, blockHash, r, s, ...rest } = props;
  return <AdditionalInfoCallback rest={rest} />;
};

export const TBody = ({ transactions }) => {
  const { ModalContext } = ModalState;
  const { setModal, ...modalProps } = useContext(ModalContext);

  useEffect(() => {
    setModal({ title: 'Additional info' });
  }, []);

  return (
    <tbody>
      {transactions.map((data, i) => (
        <Tr key={`table-tr${i}`} data={data} show={modalProps.show} setModal={setModal} index={i} />
      ))}
    </tbody>
  );
};
