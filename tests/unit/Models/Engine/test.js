const { Engine } = require( '../../../../src/models.js' );

test(
  'Insert new Engine',
  () => {

    let success = false;

    let fearsome = Engine.build(
      {
        'name':            "Chaos",
        'result_depth':    10,
        'result_selector': "//h1"
      }
    );

    fearsome.save().then(
      () => {
        success = true;
      }
    );

    expect( success ).toBe( true );

  }
);
