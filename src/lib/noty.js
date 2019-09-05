import Noty from "noty";

Noty.setMaxVisible(1);

export const noty = ({ layout = "topRight", text, type, button }) => {
  new Noty({
    layout,
    text,
    timeout: 1000,
    type
  }).show();
};

export const notySuccess = (text, opts) =>
  noty({ ...opts, text, type: "success" });

export const notyInfo = (text, opts) => noty({ ...opts, text, type: "info" });

export const notyError = (text, opts) => noty({ ...opts, text, type: "error" });
