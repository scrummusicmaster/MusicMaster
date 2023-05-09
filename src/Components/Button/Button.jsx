import ButtonMUI from "@mui/material/Button";

function Button(propTypes) {
  return (
    <>
      <div className="container">
        <ButtonMUI
          aria-expanded={propTypes.ariaExpanded}
          startIcon={propTypes.startIcon}
          onClick={propTypes.onClick}
          type={propTypes.type}
          disabled={propTypes.disabled}
          variant={propTypes.variant}
          className={`
                    ${propTypes.class}`}
        >
          {propTypes.text}
        </ButtonMUI>
      </div>
    </>
  );
}

export {Button}
