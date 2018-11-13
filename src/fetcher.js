const https = require( 'https' );

const Fetcher = function ( url )
{

  let self    = {};
  self.url    = url;
  self.chunks = new Array();
  self.html   = null;

  self.fetch  = function ()
  {

    let request = https.request(
      url,
      { method: "GET" },
      ( response ) => {
        console.log( response.statusCode );
        response.on(
          'data',
          ( payload ) => {
            //console.log( payload.toString() );
            self.chunks.push( payload.toString() );
            //console.log( self.chunks );
          }
        );

      }
    );
    
    request.on(
      'error',
      ( e ) => {
        console.log( e );
      }
    );

    request.end();
    console.log( self.chunks );

    self.html = self.chunks.join( "" );

  };

  self.GetHtml = function ()
  {
    return( self.html );
  };

  return( self );

};

fetcher = new Fetcher( "https://nazuke.github.io/SEOMacroscope/" );

fetcher.fetch();

console.log( fetcher.GetHtml() );
