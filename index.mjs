import core from '@actions/core'
import pinataClient from '@pinata/sdk'

async function main() {
  const pinataClient_ = pinataClient(
    core.getInput('api-key', { required: true }),
    core.getInput('api-secret', { required: true })
  )

  const options = {
    pinataMetadata: {
      name: core.getInput('name', { required: true }),
    },
    pinataOptions: {
      cidVersion: 1,
      wrapWithDirectory: false
    }
  }

  const response = await pinataClient_.pinFromFS(
    core.getInput('path', {required: true}),
    options
  )

  core.setOutput('cid', response.IpfsHash)
}

main()
