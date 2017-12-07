// GENERAL SETTING
window.sr = ScrollReveal({ reset: true });


// Custom Settings

// project start

sr.reveal('.header-proj' , {

    viewFactor: 0.5,
    duration: 2000,
     origin :'top',
     mobile : 'true',
  });

sr.reveal('.img-project' , {

    viewFactor: 0.5,
    duration: 2500,
     origin :'left',
     mobile : 'true',
  });
  sr.reveal('.project-p' , {

      viewFactor: 0.5,
      duration: 2500,
       origin :'right',
       mobile : 'true',
    });


    sr.reveal('.image-center' , {

        viewFactor: 0.5,
        duration: 1000,
         origin :'top',
         mobile : 'true',
      });


      sr.reveal('.p-h1' , {

          viewFactor: 0.5,
          duration: 2500,
           origin :'bottom',
           mobile : 'true',
        });

      sr.reveal('.p-p' , {

            viewFactor: 0.5,
            duration: 2500,
             origin :'bottom',
             mobile : 'true',
          });
// project end

// cv start
  sr.reveal('.cv-h1-1' , {

      viewFactor: 0.5,
      duration: 2000,
       origin :'top',
       mobile : 'true',
    });


    sr.reveal('.cv-h1-2' , {

        viewFactor: 0.5,
        duration: 2000,
         origin :'top',
         mobile : 'true',
      });


      sr.reveal('.cv-h1-3' , {

          viewFactor: 0.5,
          duration: 2000,
           origin :'top',
           mobile : 'true',
        });


        sr.reveal('.cv-h1-4' , {

            viewFactor: 0.5,
            duration: 2000,
             origin :'top',
             mobile : 'true',
          });

    sr.reveal('.cv-p' , {
        wait:     '50',
        viewFactor: 0.5,
        duration: 2000,
         origin :'bottom',
         mobile : 'true',
      });

      sr.reveal('.cv-p4' , {
          wait :  '50',
          viewFactor: 0.5,
          duration: 2000,
           origin :'left',
           mobile : 'true',
        });

        sr.reveal('.bar' , {
            wait :  '50',
            viewFactor: 0.5,
            duration: 2000,
             origin :'right',
             mobile : 'true',
          });


// cv end



// contact me

    sr.reveal('.h-form' , {
    viewFactor: 0.5,
    duration: 1000,
     origin :'left',
     mobile : 'true',
  });

  sr.reveal('#name' , {
      viewFactor: 0.5,
      duration: 2000,
       origin :'left',
       mobile : 'true',
    });

  sr.reveal('#email' , {
        viewFactor: 0.5,
        duration: 2000,
         origin :'right',
         mobile : 'true',
      });

      sr.reveal('#comment' , {
                viewFactor: 0.5,
                duration: 2000,
                 origin :' bottom',
                 mobile : 'true',
              });

  sr.reveal('.send' , {
            viewFactor: 0.5,
            duration: 2000,
             origin :' bottom',
             mobile : 'true',
          });




  sr.reveal('.fa' , {
      duration: 3000,
      origin :' right',
      mobile : 'true',
  });

  sr.reveal('.maps' , {

    viewFactor: 0.5,
    duration: 2500,
    origin :'right',
    mobile : 'true',
    });



    sr.reveal('.visit' , {

      viewFactor: 0.5,
      duration: 2500,
      origin :'left',
      mobile : 'true',
      });
// contact me end

$('.nav').localScroll(); // scrolling
