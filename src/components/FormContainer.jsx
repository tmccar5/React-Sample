import React, { Component } from 'react';


class FormContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
  }

  render() {
    return (
      <div>
        Tomas!!!!
      </div>
    );
  }
}

FormContainer.contextTypes = {
  store: React.PropTypes.object
};

FormContainer.propTypes = {
  // drafts: React.PropTypes.array
};

// const mapStateToProps = (state) => ({
//   // drafts: state.draftsData.drafts,
//   // aboutUsInfo: getDraftByType(state, 'about'),
//   // window: state.window
// });

// const mapDispatchToProps = (dispatch) => ({
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FormContainer);

export default FormContainer;
