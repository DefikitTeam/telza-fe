/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/donate.json`.
 */
export type Donate = {
  address: 'TipwTGD1o2zhGRUzNUhbq6kfDGjZiSgpXFDdwaLuA3e'
  metadata: {
    name: 'donate'
    version: '0.1.0'
    spec: '0.1.0'
    description: 'Created with Anchor'
  }
  instructions: [
    {
      name: 'donateSol'
      discriminator: [168, 195, 198, 161, 226, 163, 222, 113]
      accounts: [
        {
          name: 'user'
          writable: true
          signer: true
        },
        {
          name: 'global'
          pda: {
            seeds: [
              {
                kind: 'const'
                value: [103, 108, 111, 98, 97, 108]
              }
            ]
          }
        },
        {
          name: 'recipient'
          writable: true
        },
        {
          name: 'feeRecipient'
          writable: true
          relations: ['global']
        },
        {
          name: 'systemProgram'
          address: '11111111111111111111111111111111'
        },
        {
          name: 'eventAuthority'
          pda: {
            seeds: [
              {
                kind: 'const'
                value: [95, 95, 101, 118, 101, 110, 116, 95, 97, 117, 116, 104, 111, 114, 105, 116, 121]
              }
            ]
          }
        },
        {
          name: 'program'
        }
      ]
      args: [
        {
          name: 'amount'
          type: 'u64'
        },
        {
          name: 'message'
          type: 'string'
        }
      ]
    },
    {
      name: 'donateSpl'
      discriminator: [50, 134, 62, 209, 49, 165, 28, 160]
      accounts: [
        {
          name: 'user'
          writable: true
          signer: true
        },
        {
          name: 'global'
          pda: {
            seeds: [
              {
                kind: 'const'
                value: [103, 108, 111, 98, 97, 108]
              }
            ]
          }
        },
        {
          name: 'recipient'
          writable: true
        },
        {
          name: 'mint'
          writable: true
        },
        {
          name: 'associatedUser'
          writable: true
          pda: {
            seeds: [
              {
                kind: 'account'
                path: 'user'
              },
              {
                kind: 'const'
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                kind: 'account'
                path: 'mint'
              }
            ]
            program: {
              kind: 'const'
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          name: 'associatedRecipient'
          writable: true
          pda: {
            seeds: [
              {
                kind: 'account'
                path: 'recipient'
              },
              {
                kind: 'const'
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                kind: 'account'
                path: 'mint'
              }
            ]
            program: {
              kind: 'const'
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          name: 'associatedFee'
          writable: true
          pda: {
            seeds: [
              {
                kind: 'account'
                path: 'global.fee_recipient'
                account: 'global'
              },
              {
                kind: 'const'
                value: [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                kind: 'account'
                path: 'mint'
              }
            ]
            program: {
              kind: 'const'
              value: [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          name: 'systemProgram'
          address: '11111111111111111111111111111111'
        },
        {
          name: 'tokenProgram'
          address: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
        },
        {
          name: 'associatedTokenProgram'
          address: 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL'
        },
        {
          name: 'eventAuthority'
          pda: {
            seeds: [
              {
                kind: 'const'
                value: [95, 95, 101, 118, 101, 110, 116, 95, 97, 117, 116, 104, 111, 114, 105, 116, 121]
              }
            ]
          }
        },
        {
          name: 'program'
        }
      ]
      args: [
        {
          name: 'amount'
          type: 'u64'
        },
        {
          name: 'message'
          type: 'string'
        }
      ]
    },
    {
      name: 'initialize'
      discriminator: [175, 175, 109, 31, 13, 152, 155, 237]
      accounts: [
        {
          name: 'admin'
          writable: true
          signer: true
        },
        {
          name: 'global'
          writable: true
          pda: {
            seeds: [
              {
                kind: 'const'
                value: [103, 108, 111, 98, 97, 108]
              }
            ]
          }
        },
        {
          name: 'systemProgram'
          address: '11111111111111111111111111111111'
        },
        {
          name: 'rent'
          address: 'SysvarRent111111111111111111111111111111111'
        }
      ]
      args: [
        {
          name: 'bump'
          type: 'u8'
        },
        {
          name: 'fee'
          type: 'u64'
        },
        {
          name: 'feeRecipient'
          type: 'pubkey'
        }
      ]
    },
    {
      name: 'update'
      discriminator: [219, 200, 88, 176, 158, 63, 253, 127]
      accounts: [
        {
          name: 'admin'
          writable: true
          signer: true
          relations: ['global']
        },
        {
          name: 'global'
          writable: true
          pda: {
            seeds: [
              {
                kind: 'const'
                value: [103, 108, 111, 98, 97, 108]
              }
            ]
          }
        },
        {
          name: 'systemProgram'
          address: '11111111111111111111111111111111'
        }
      ]
      args: [
        {
          name: 'admin'
          type: 'pubkey'
        },
        {
          name: 'fee'
          type: 'u64'
        },
        {
          name: 'feeRecipient'
          type: 'pubkey'
        }
      ]
    }
  ]
  accounts: [
    {
      name: 'global'
      discriminator: [167, 232, 232, 177, 200, 108, 114, 127]
    }
  ]
  events: [
    {
      name: 'donateSolEvent'
      discriminator: [107, 97, 14, 108, 237, 225, 18, 80]
    },
    {
      name: 'donateSplEvent'
      discriminator: [135, 166, 165, 202, 89, 166, 74, 28]
    }
  ]
  errors: [
    {
      code: 6000
      name: 'zeroAmount'
      msg: 'Zero amount'
    }
  ]
  types: [
    {
      name: 'donateSolEvent'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'from'
            type: 'pubkey'
          },
          {
            name: 'to'
            type: 'pubkey'
          },
          {
            name: 'amount'
            type: 'u64'
          },
          {
            name: 'message'
            type: 'string'
          }
        ]
      }
    },
    {
      name: 'donateSplEvent'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'from'
            type: 'pubkey'
          },
          {
            name: 'to'
            type: 'pubkey'
          },
          {
            name: 'mint'
            type: 'pubkey'
          },
          {
            name: 'amount'
            type: 'u64'
          },
          {
            name: 'message'
            type: 'string'
          }
        ]
      }
    },
    {
      name: 'global'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'bump'
            type: 'u8'
          },
          {
            name: 'admin'
            type: 'pubkey'
          },
          {
            name: 'fee'
            type: 'u64'
          },
          {
            name: 'feeRecipient'
            type: 'pubkey'
          }
        ]
      }
    }
  ]
}
