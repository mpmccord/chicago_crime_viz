import Placeholder from 'react-bootstrap/Placeholder';

export function GenderCrimes() {
  return (
    <>
      <p aria-hidden="true">
        <Placeholder xs={6} />
      </p>

      <Placeholder.Button xs={4} aria-hidden="true" />
    </>
  );
}