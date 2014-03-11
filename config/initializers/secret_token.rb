# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Journal::Application.config.secret_key_base = '5a3f278862144ec8de505e4956c0e18d089de7389da6fe9a64a0d64671b94bd92b684c85604518cb676037dad5c905012dead503517b9504ed54dcb97cf689eb'
