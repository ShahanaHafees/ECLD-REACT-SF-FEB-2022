function oddNumber(limit)
{
    for(i=1; i<=limit; i++)
    {
        if(i % 2 != 0)
        {
            console.log(i);
        }
    }
}
console.log('\n');
oddNumber(10);