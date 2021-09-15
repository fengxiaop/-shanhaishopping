#include<stdio.h>
#define M(X,Y,Z) X*Y+Z
main()
{
    int a=1,b=2,c=3;
    printf("%d\n",M(a+b,b+c,a+c));
}