

export const getDoc = (host:string)=>{

    return {
        "openapi": "3.0.0",
        "info": {
          "title": "BookFace Backend",
          "version": "0.1.9"
        },
        "servers": [
          {
            "url": `${host}`
          }
        ],
        "paths": {
          "/register": {
            "post": {
              "summary": "",
              "tags": [
                "Users"
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "email": {
                          "type": "string"
                        },
                        "pwd": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "email",
                        "pwd"
                      ]
                    },
                    "example": {
                      "email": "test2@test.com",
                      "pwd": "test"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "status": {
                            "type": "number"
                          },
                          "message": {
                            "type": "string"
                          },
                          "constent": {
                            "type": "object"
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "status": {
                            "type": "number"
                          },
                          "message": {
                            "type": "string"
                          },
                          "constent": {
                            "type": "object"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "/login": {
            "post": {
              "summary": "",
              "tags": [
                "Users"
              ],
              "requestBody": {
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "email": {
                          "type": "string"
                        },
                        "pwd": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "email"
                      ]
                    },
                    "example": {
                      "email": "test2@test.com",
                      "pwd": "test"
                    }
                  }
                }
              },
              "responses": {
                "200": {
                  "description": "",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "status": {
                            "type": "number"
                          },
                          "message": {
                            "type": "string"
                          },
                          "constent": {
                            "type": "object"
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "status": {
                            "type": "number"
                          },
                          "message": {
                            "type": "string"
                          },
                          "constent": {
                            "type": "object"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "/logout": {
            "post": {
              "summary": "",
              "tags": [
                "Users"
              ],
              "parameters": [
                {
                  "in": "cookie",
                  "name": "VATOKEN",
                  "schema": {
                    "type": "string"
                  }
                }
              ],
              "responses": {
                "200": {
                  "description": "",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "status": {
                            "type": "number"
                          },
                          "message": {
                            "type": "string"
                          },
                          "constent": {
                            "type": "object"
                          }
                        }
                      }
                    }
                  }
                },
                "400": {
                  "description": "",
                  "content": {
                    "application/json": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "status": {
                            "type": "number"
                          },
                          "message": {
                            "type": "string"
                          },
                          "constent": {
                            "type": "object"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "tags": [
          {
            "name": "Users",
            "description": "User operations"
          },
          {
            "name": "Groups",
            "description": "Groups operations"
          },
          {
            "name": "Posts",
            "description": "Posts operations"
          },
          {
            "name": "Events",
            "description": "Events operations"
          }
        ]
      }

}