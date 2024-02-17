export async function loader({ params }) {
    async function getContact(contactId) {

    }

    const contact = await getContact(params.contactId);
    return { contact };
}