import BlotFormatter from "../BlotFormatter";
import Action from "../actions/Action";
import AlignAction from "../actions/align/AlignAction";
import ResizeAction from "../actions/ResizeAction";
import DeleteAction from "../actions/DeleteAction";
export default class BlotSpec {
  constructor(formatter) {
    this.formatter = formatter;
  }

  init() {}

  getActions() {
    return [AlignAction, ResizeAction, DeleteAction];
  }

  getTargetElement() {
    return null;
  }

  getOverlayElement() {
    return this.getTargetElement();
  }

  setSelection() {
    this.formatter.quill.setSelection(null);
  }

  onHide() {}
}
