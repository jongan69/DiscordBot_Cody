
module.exports = {
    name: 'delete',
    aliases: ["rm"],
    description: "deletes up to 99 messages",
    execute(message, args){
        //console.log(message)

        //MUST VERIFY PERMISSIONS TO PROCEED
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('```> You cannot clear messages```');

        console.log(message.member.hasPermission('MANAGE_MESSAGES'))
        //clear previous message (up to 99)
        console.log('Ready for DELETE command');

        //if there are no arguments or if 0, delete recent
        var x = (args.length == 0 || parseInt(args[0]) == 0) ? 1 : parseInt(args[0]);
        console.log(`Deleting ${x} messages...`);

        //NOTE: May not delete if messages are less than requested.
        if (x > 99) return message.channel.send('```> You cannot delete more than 99 messages at a time!```');
        message.channel.bulkDelete(x + 1).then(() => {
            message.channel.send('```> CLEAR!```').then(message => message.delete({timeout: 3000}));
        }).catch((err) => {
            return message.channel.send('```> Error in Deleting Messages!\n> Please enter integer.```');
        })
    }
}