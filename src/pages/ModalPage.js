import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from 'react'

function ModalPage() {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const actionBar = <div><Button primary onClick={handleClose}>I Accept</Button></div>
  const modal = <Modal onClose={handleClose} actionBar={actionBar}><p>Here is an important agreement for you to accept</p></Modal>

  return (
    <div>

      <Button primary onClick={handleClick}>Open Modal</Button>
      {showModal && modal}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan lorem sed diam congue, at lobortis eros cursus. Suspendisse eleifend finibus nisi quis euismod. Mauris sodales lectus tincidunt urna viverra, sit amet fringilla purus fermentum. Integer finibus sit amet urna eu elementum. Morbi consequat sapien quis lacus congue, ac viverra eros suscipit. Nam eget feugiat velit. Donec vitae sapien metus. Donec sodales tellus sed nunc fermentum placerat. Vestibulum eu tortor et risus placerat tincidunt. Donec sodales lacus at accumsan condimentum. Mauris vulputate nisl in orci sollicitudin, a lobortis tortor efficitur. Praesent ac mauris eros. Quisque pulvinar, lorem at bibendum sagittis, lectus ipsum rhoncus ex, sit amet vehicula risus ligula at nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan lorem sed diam congue, at lobortis eros cursus. Suspendisse eleifend finibus nisi quis euismod. Mauris sodales lectus tincidunt urna viverra, sit amet fringilla purus fermentum. Integer finibus sit amet urna eu elementum. Morbi consequat sapien quis lacus congue, ac viverra eros suscipit. Nam eget feugiat velit. Donec vitae sapien metus. Donec sodales tellus sed nunc fermentum placerat. Vestibulum eu tortor et risus placerat tincidunt. Donec sodales lacus at accumsan condimentum. Mauris vulputate nisl in orci sollicitudin, a lobortis tortor efficitur. Praesent ac mauris eros. Quisque pulvinar, lorem at bibendum sagittis, lectus ipsum rhoncus ex, sit amet vehicula risus ligula at nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan lorem sed diam congue, at lobortis eros cursus. Suspendisse eleifend finibus nisi quis euismod. Mauris sodales lectus tincidunt urna viverra, sit amet fringilla purus fermentum. Integer finibus sit amet urna eu elementum. Morbi consequat sapien quis lacus congue, ac viverra eros suscipit. Nam eget feugiat velit. Donec vitae sapien metus. Donec sodales tellus sed nunc fermentum placerat. Vestibulum eu tortor et risus placerat tincidunt. Donec sodales lacus at accumsan condimentum. Mauris vulputate nisl in orci sollicitudin, a lobortis tortor efficitur. Praesent ac mauris eros. Quisque pulvinar, lorem at bibendum sagittis, lectus ipsum rhoncus ex, sit amet vehicula risus ligula at nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan lorem sed diam congue, at lobortis eros cursus. Suspendisse eleifend finibus nisi quis euismod. Mauris sodales lectus tincidunt urna viverra, sit amet fringilla purus fermentum. Integer finibus sit amet urna eu elementum. Morbi consequat sapien quis lacus congue, ac viverra eros suscipit. Nam eget feugiat velit. Donec vitae sapien metus. Donec sodales tellus sed nunc fermentum placerat. Vestibulum eu tortor et risus placerat tincidunt. Donec sodales lacus at accumsan condimentum. Mauris vulputate nisl in orci sollicitudin, a lobortis tortor efficitur. Praesent ac mauris eros. Quisque pulvinar, lorem at bibendum sagittis, lectus ipsum rhoncus ex, sit amet vehicula risus ligula at nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan lorem sed diam congue, at lobortis eros cursus. Suspendisse eleifend finibus nisi quis euismod. Mauris sodales lectus tincidunt urna viverra, sit amet fringilla purus fermentum. Integer finibus sit amet urna eu elementum. Morbi consequat sapien quis lacus congue, ac viverra eros suscipit. Nam eget feugiat velit. Donec vitae sapien metus. Donec sodales tellus sed nunc fermentum placerat. Vestibulum eu tortor et risus placerat tincidunt. Donec sodales lacus at accumsan condimentum. Mauris vulputate nisl in orci sollicitudin, a lobortis tortor efficitur. Praesent ac mauris eros. Quisque pulvinar, lorem at bibendum sagittis, lectus ipsum rhoncus ex, sit amet vehicula risus ligula at nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan lorem sed diam congue, at lobortis eros cursus. Suspendisse eleifend finibus nisi quis euismod. Mauris sodales lectus tincidunt urna viverra, sit amet fringilla purus fermentum. Integer finibus sit amet urna eu elementum. Morbi consequat sapien quis lacus congue, ac viverra eros suscipit. Nam eget feugiat velit. Donec vitae sapien metus. Donec sodales tellus sed nunc fermentum placerat. Vestibulum eu tortor et risus placerat tincidunt. Donec sodales lacus at accumsan condimentum. Mauris vulputate nisl in orci sollicitudin, a lobortis tortor efficitur. Praesent ac mauris eros. Quisque pulvinar, lorem at bibendum sagittis, lectus ipsum rhoncus ex, sit amet vehicula risus ligula at nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan lorem sed diam congue, at lobortis eros cursus. Suspendisse eleifend finibus nisi quis euismod. Mauris sodales lectus tincidunt urna viverra, sit amet fringilla purus fermentum. Integer finibus sit amet urna eu elementum. Morbi consequat sapien quis lacus congue, ac viverra eros suscipit. Nam eget feugiat velit. Donec vitae sapien metus. Donec sodales tellus sed nunc fermentum placerat. Vestibulum eu tortor et risus placerat tincidunt. Donec sodales lacus at accumsan condimentum. Mauris vulputate nisl in orci sollicitudin, a lobortis tortor efficitur. Praesent ac mauris eros. Quisque pulvinar, lorem at bibendum sagittis, lectus ipsum rhoncus ex, sit amet vehicula risus ligula at nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan lorem sed diam congue, at lobortis eros cursus. Suspendisse eleifend finibus nisi quis euismod. Mauris sodales lectus tincidunt urna viverra, sit amet fringilla purus fermentum. Integer finibus sit amet urna eu elementum. Morbi consequat sapien quis lacus congue, ac viverra eros suscipit. Nam eget feugiat velit. Donec vitae sapien metus. Donec sodales tellus sed nunc fermentum placerat. Vestibulum eu tortor et risus placerat tincidunt. Donec sodales lacus at accumsan condimentum. Mauris vulputate nisl in orci sollicitudin, a lobortis tortor efficitur. Praesent ac mauris eros. Quisque pulvinar, lorem at bibendum sagittis, lectus ipsum rhoncus ex, sit amet vehicula risus ligula at nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan lorem sed diam congue, at lobortis eros cursus. Suspendisse eleifend finibus nisi quis euismod. Mauris sodales lectus tincidunt urna viverra, sit amet fringilla purus fermentum. Integer finibus sit amet urna eu elementum. Morbi consequat sapien quis lacus congue, ac viverra eros suscipit. Nam eget feugiat velit. Donec vitae sapien metus. Donec sodales tellus sed nunc fermentum placerat. Vestibulum eu tortor et risus placerat tincidunt. Donec sodales lacus at accumsan condimentum. Mauris vulputate nisl in orci sollicitudin, a lobortis tortor efficitur. Praesent ac mauris eros. Quisque pulvinar, lorem at bibendum sagittis, lectus ipsum rhoncus ex, sit amet vehicula risus ligula at nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan lorem sed diam congue, at lobortis eros cursus. Suspendisse eleifend finibus nisi quis euismod. Mauris sodales lectus tincidunt urna viverra, sit amet fringilla purus fermentum. Integer finibus sit amet urna eu elementum. Morbi consequat sapien quis lacus congue, ac viverra eros suscipit. Nam eget feugiat velit. Donec vitae sapien metus. Donec sodales tellus sed nunc fermentum placerat. Vestibulum eu tortor et risus placerat tincidunt. Donec sodales lacus at accumsan condimentum. Mauris vulputate nisl in orci sollicitudin, a lobortis tortor efficitur. Praesent ac mauris eros. Quisque pulvinar, lorem at bibendum sagittis, lectus ipsum rhoncus ex, sit amet vehicula risus ligula at nisi.
      </p>

    </div>
  )
}

export default ModalPage;