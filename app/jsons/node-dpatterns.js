export default {
  'data': [
    { 
      type: 'node-dpattern',
      'id': 'tmve',
      attributes: {
        'name': 'TMVE',
        'year': '1979',
        'author': 'T. Reenskaug',
        'row': '1',
        'children': ['mvc79'],
        'definitions': [
            {
              'term': 'Thing',
              'text': 'Something that is of interest to the user. It could be concrete, like a house or an integrated circuit. It could be abstract, like a new idea or opinions about a paper. It could be a whole, like a computer, or a part, like a circuit element.'
            },
            {
              'term': 'Model',
              'text': 'A Model is an active representation of an abstraction in the form of data in a computing system.'
            },
            {
              'term': 'View',
              'text': 'To any given Model there is attached one or more Views, each View being capable of showing one or more pictorial representations of the Model on the screen and on hardcopy. A View is also able to perform such operations upon the Model that is reasonabely associated with that View.'
            },
            {
              'term': 'Editor',
              'text': 'An Editor is an interface between a user and one or more views. It provides the user with a suitable command system, for example in the form of menus that may change dynamically according to the current context. It provides the Views with the necessary coordination and command messages.'
            }
        ]
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'classic-mvc'}
        }
      }
    },
    { 
      type: 'node-dpattern',
      'id': 'mvc79',
      attributes: {
        'name': 'MVC',
        'year': '1979',
        'author': 'T. Reenskaug',
        'row': '2',
        'children': ['mvc-kp', 'mvp'],
        'definitions': [
            {
              'term': 'Model',
              'text': 'Models represent knowledge. A model could be a single object (rather uninteresting), or it could be some structure of objects.'
            },
            {
              'term': 'View',
              'text': 'A view is a (visual) representation of its model. It would ordinarily highlight certain attributes of the model and suppress others. It is thus acting as a presentation filter.'
            },
            {
              'term': 'Controller',
              'text': 'A controller is the link between a user and the system.'
            }
        ]
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'classic-mvc'}
        }
      }
    },
    { 
      type: 'node-dpattern',
      'id': 'pac',
      attributes: {
        'name': 'PAC',
        'year': '1987',
        'author': 'J. Coutaz',
        'row': '5',
        'definitions': [
            {
              'term': 'Presentation',
              'text': 'the Presentation defines the concrete syntax of the application, i.e. the input and output behavior of the application as perceived by the user. The Presentation of an application is a set of entities, called interactive objects, specialized in man-machine communication.'
            },
            {
              'term': 'Abstraction',
              'text': 'the Abstraction part corresponds to the semantics of the application. It implements the functions that the application is able to perform. These functions are supposed to result from a thorough task analysis.'
            },
            {
              'term': 'Control',
              'text': 'the Control part maintains the mapping and the consistency between the abstract entities (involved in the interaction and implemented in the Abstract part) and their presentation to the user. It embodies the boundary between semantics and syntax. It is intended to hold the context of the overall interaction between the user and the application.'
            }
        ]
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'miscellaneous'}
        }
      }
    },
    { 
      type: 'node-dpattern',
      'id': 'mvc-kp',
      attributes: {
        'name': 'MVC K&P',
        'year': '1988',
        'author': 'Krasner & Pope',
        'row': '6',
        'children': ['am', 'model2'],
        'definitions': [
            {
              'term': 'Model',
              'text': 'The model of an application is the domain-specific software simulation or implementation of the application\'s central structure.'
            },
            {
              'term': 'View',
              'text': 'Views deal with everything graphical: they request data from their model, and display the data.'
            },
            {
              'term': 'Controller',
              'text': 'Controllers contain the interface between their associated models and views and the input devices (e.g., keyboard, pointing device, time).'
            }
        ]
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'classic-mvc'}
        }
      }
    },
    { 
      type: 'node-dpattern',
      'id': 'am',
      attributes: {
        'name': 'Application Model',
        'year': '1993',
        'author': 'VisualWorks',
        'row': '9',
        'children': ['pm'],
        'definitions': [
            {
              'term': 'Domain Model',
              'text': 'Some object or objects that represent your domain.'
            },
            {
              'term': 'Application Model',
              'text': 'Handle user interaction and re-direct messages to the domain model if necessary. Observes the domain model and provides property objects. Deals with view logic and view state.'
            },
            {
              'term': 'View',
              'text': 'Each view should display a particular visual representation of some aspect of the model.'
            },
            {
              'term': 'Controller',
              'text': 'Manipulates the model and the changes should be reflected in the view.'
            },
        ]
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'am'}
        },
        related: {
          data: [{'id': 'dolphin', 'type': 'node-technology'}],
        }
      }
    },
    { 
      type: 'node-dpattern',
      'id': 'observer',
      attributes: {
        'name': 'Observer Pattern',
        'year': '1994',
        'author': 'GoF',
        'row': '10',
        'definitions': null
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'miscellaneous'}
        }
      }
    },
    { 
      type: 'node-dpattern',
      'id': 'data_binding',
      attributes: {
        'name': 'Data Binding',
        'year': '1995',
        'author': 'unknown',
        'row': '11',
        'definitions': null 
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'miscellaneous'}
        }
      }
    },
    { 
      type: 'node-dpattern',
      'id': 'mvp',
      attributes: {
        'name': 'MVP',
        'year': '1996',
        'author': 'Taligent',
        'row': 12,
        'definitions': [
            {
              'term': 'Model',
              'text': 'Deals with data management. How do I change my data? How do I specify my data? What is my data?'
            },
            {
              'term': 'View',
              'text': 'Deals with user interface. How do I display my data? How do events map into changes in my data? It hands off events to the presenter, similar to what Application Model does. But, it observes the Model, so the View updates itself.'
            },
            {
              'term': 'Presenter',
              'text': 'The View-Controller of a basic MVC is refered as Presentation. This represents the function of the classic Smalltalk controller, but elevated to an application level and taking into account the intermediate selection, command, and interactor concepts. Its role is to interpret the events and gestures initiated by the user and provide business logic. The classic Controller faded into the View.'
            }
        ]
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'mvp'}
        }
      }
    },
    { 
      type: 'node-dpattern',
      'id': 'model2',
      attributes: {
        'name': 'Model 2',
        'year': '1998',
        'author': 'J2EE',
        'row': 14,
        'definitions': [
            {
              'term': 'Model',
              'text': 'Java Beans'
            },
            {
              'term': 'View',
              'text': 'JSP Pages'
            },
            {
              'term': 'Controller',
              'text': 'A Servlet (later framework) with routing built in'
            }
        ]
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'server-mvc'}
        }
      }
    },
    { 
      type: 'node-dpattern',
      'id': 'mva',
      attributes: {
        'name': 'MVA',
        'year': '2001?',
        'author': 'Cocoa?',
        'row': 16,
        'definitions': [
            {
              'term': 'Model',
              'text': ''
            },
            {
              'term': 'View',
              'text': 'Is completely decoupled from the Model.'
            },
            {
              'term': 'Adapter',
              'text': 'AKA mediating controller'
            }
        ]
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'mvp'}
        }
      }
    },
    { 
      type: 'node-dpattern',
      'id': 'pm',
      attributes: {
        'name': 'Presentation Model',
        'year': '2004',
        'author': 'M. Fowler',
        'row': '17',
        'definitions': [
            {
              'term': 'Presentation Model',
              'text': 'Stores state and logic, its an abstraction of the view.'
            },
            {
              'term': 'View',
              'text': 'Presentation behavior, utterly simple and mainly used to render.'
            }
        ]
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'am'}
        }
      }
    },
    { 
      type: 'node-dpattern',
      'id': 'mvvm',
      attributes: {
        'name': 'MVVM',
        'year': '2005',
        'author': 'Microsoft',
        'row': '19',
        'definitions': [
            {
              'term': 'Model',
              'text': 'It is the data or business logic, completely UI independent, that stores the state and does the processing of the problem domain.'
            },
            {
              'term': 'View',
              'text': 'Consists of the visual elements, the buttons, windows, graphics and more complex controls of a GUI. In simple examples, the View is data bound directly to the model.'
            },
            {
              'term': 'View Model',
              'text': 'The term means \"Model of a View\", and be thought of as abstraction of the view, but it also provides a specialization of the Model that the View can use for data-binding. It contains data-transformers that convert Model types into View types, and it contains Commands the View can use to interact with the Model.'
            }
        ]
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'mvvm'}
        },
        related: {
          data: [{id: 'pm', type: 'node-dpattern'}, 
                 {id: 'data_binding', type: 'node-dpattern'}]
        }
      }
    },
    { 
      type: 'node-dpattern',
      'id': 'mvw',
      attributes: {
        'name': 'MVW',
        'year': '2012',
        'author': 'unknown',
        'row': '27',
        'definitions': [
            {
              'term': 'Model',
              'text': ''
            },
            {
              'term': 'View',
              'text': ''
            },
            {
              'term': 'Whatever',
              'text': 'Whatever works for you'
            }
        ]
      },
      relationships: {
        column: {
          data: {type: 'column', id: 'miscellaneous'}
        }
      }
    }
  ]
};
